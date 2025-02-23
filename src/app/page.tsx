export default function Home() {
  let page = "login";
  return (
    <>
      {page == "login" ?
        <>
          login
        </>
      :
        <>
          register
        </>
      }
    </>
  );
}
