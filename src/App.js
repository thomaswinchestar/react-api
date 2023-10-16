import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBSpinner,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBadge
} from "mdb-react-ui-kit";

export default function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/").then((res) => {
      const data = res.data;
      setData(data);
      setLoader(false);
    });
  }, []);
  return (
    <>
      {loader ? (
        <div className="d-flex justify-content-center mt-5">
          <MDBSpinner role="status">
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        </div>
      ) : (
        <MDBContainer breakpoint="lg">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="6" className="mt-5 text-black">
              {data.map((d) => (
                <MDBCard className="my-3" key={d.id}>
                  <MDBCardBody>
                    <MDBCardTitle>Task ID-{d.id}</MDBCardTitle>
                    {d.completed ? (
                      <MDBBadge color="success" light size="sm">
                        Done
                      </MDBBadge>
                    ) : (
                      <MDBBadge
                        className="mx-2 mb-3"
                        color="danger"
                        light
                        size="sm"
                      >
                        Undone
                      </MDBBadge>
                    )}
                    <MDBCardText>{d.title}</MDBCardText>
                    <MDBBtn>User ID - {d.userId}</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              ))}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}
    </>
  );
}
