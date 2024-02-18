import useLoggedIn from "../../hooks/useLogged";

export const Profile = () => {
    useLoggedIn()
  return (
    <section>
      <h1>profile</h1>
    </section>
  );
};
