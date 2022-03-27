import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { Avatar, Button, IconButton } from "@material-ui/core";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function Sidebar() {
  const [user] = useAuthState(auth);
  const userChatRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(userChatRef);
  const createChat = () => {
    const input = prompt("Enter the email for chat");
    if (!input) {
      alert("Cancelled");
      return;
    }
    if (
      validateEmail(input) &&
      !chatAlreadyExists(input) &&
      input !== user.email
    ) {
      db.collection("chat").add({
        users: [user.email, input],
      });
    } else {
      alert("Invalid email");
      return;
    }
  };
  const logout = () => {
    auth.signOut();
  };
  const chatAlreadyExists = (receipientEmail) =>
    !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === receipientEmail)?.length > 0
    );

  return (
    <Container>
      <Header>
        <UserAvatar onClick={logout} />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>
      <Search>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <SearchInput placeholder="Search in Chats" />
      </Search>
      <SideBarButton onClick={createChat}>Start a new Chat</SideBarButton>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  background-color: #fff;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;
const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
`;
const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const SideBarButton = styled(Button)`
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
