function Index(props) {
  const name = props.data.name;
  return <h1>Hello {name}</h1>;
}

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:3000/api/hello");
    const data = await res.json();
    console.log("##", data);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
}

export default Index;
