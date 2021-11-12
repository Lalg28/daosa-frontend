import React, { useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { registerUser } from "../../../api/user";
import Swal from "sweetalert2";

function RegisterModal({registerModal, setRegisterModal}) {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const res = await registerUser(data);
    if (res?.jwt) {
      Swal.fire({
        title: "Registro exitoso",
        timer: 1500,
        icon: "success",
        showConfirmButton: false,
      });
      setRegisterModal(false)
    } else {
      Swal.fire({
        title: "Hubo un error",
        timer: 1500,
        icon: "error",
        showConfirmButton: false,
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Modal
        show={registerModal}
        onHide={() => setRegisterModal(!registerModal)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <h2>Registrarse</h2>
        </Modal.Header>
        <Modal.Body>
            <p>Descubre lo que Nissan Daosa tiene para ti</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Nombre Completo"
              className="form-control py-2"
              {...register("username")}
            />
             <input 
              type="number"
              placeholder="Numero telefónico"
              className="form-control py-2 mt-3"
              {...register("phone")}
            />
            <input
              type="email"
              placeholder="correo@nissandaosa.mx"
              className="form-control py-2 mt-3"
              {...register("email")}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="form-control py-2 mt-3"
              {...register("password")}
            />
            <Button className="mt-3 text-center" type="submit" disabled={loading && true}>
              {loading ? (
                <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                /> Cargando
                </>
              ) : (
                "Registrarse"
              )}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RegisterModal;
