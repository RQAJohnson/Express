import {useState} from 'react';

const Home = () => { //FIX THIS
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#AboutPage">AboutPage</Nav.Link>
      <Nav.Link href="#Products">Products</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#Home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#AboutPage">AboutPage</Nav.Link>
      <Nav.Link href="#Products">Products</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

  <br />
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#Home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#AboutPage">AboutPage</Nav.Link>
      <Nav.Link href="#Products">Products</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
</>


}

export default Home;