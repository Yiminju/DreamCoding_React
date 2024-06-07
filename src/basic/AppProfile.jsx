import "./AppProfile.css";
import Avatar from "./component/Avatar";
import Profile from "./component/Profile";

function AppProfile() {
  const handleClick = (e) => {
    console.log(e);
    alert("버튼이 클릭됨!");
  };
  return (
    <>
      <button onClick={handleClick}>Button</button>
      <form onSubmit={() => {}}>
        <input />
      </form>
      <Avatar
        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Minju Lee"
        title="frontend developer"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Sangmoon Lee"
        title="backend developer"
      />
      <Profile
        image="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="eanju Lee"
        title="frontend developer"
        isNew={true}
      />
    </>
  );
}

export default AppProfile;
