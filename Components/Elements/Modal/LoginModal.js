import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { loginUser } from "../../../redux/ducks/userDuck";
import Swal from "sweetalert2";

function LoginModal({ showModal, setShowModal }) {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const user = useSelector((state) => state.user);

  const onSubmit = async (data) => {
    dispatch(loginUser(data));
    if (!user.loading) {
      if (user.jwt) {
        setShowModal(false);
      } else {
        Swal.fire({
          title: "Usuario o contraseña incorrectos",
          timer: 1000,
          icon: "error",
          showConfirmButton: false,
        });
      }
    }
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(!showModal)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <h2>Iniciar Sesión</h2>
        </Modal.Header>
        <Modal.Body>
          <p>Que gusto tenerte de nuevo</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Correo Electronico"
              className="form-control py-2"
              {...register("identifier")}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="form-control py-2 mt-3"
              {...register("password")}
            />
            <Button
              className="mt-3 text-center"
              type="submit"
              disabled={user.loading && true}
            >
              {user.loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Cargando
                </>
              ) : (
                "Iniciar Sesión"
              )}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
