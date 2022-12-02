import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
  HeartTwoTone,
  DeleteOutlined,
  EditOutlined,
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons";
export default function Card({ data, call, idx, editMethod, callHeart }) {
  const { url, name, email, phone, website, heart } = data;
  const [ediT, editModal] = useState(false);
  const [nm, setNm] = useState("");
  const [phn, setPhn] = useState("");
  const [em, setEm] = useState("");
  const [web, setWeb] = useState("");
  const submitReq = () => {
    data = { idx, nm, phn, em, web };
    editMethod(data);
    editModal(false);
  };

  return (
    <>
      <div className="card col-3 p-7 mt-4">
        <img src={url} style={{ height: 200, background: "whitesmoke" }} />
        <div></div>
        <div className="px-3 mt-4 mb-3">
          <div>{name}</div>
          <div className="d-flex" style={{ lineHeight: 2 }}>
            <MailOutlined />
            <div className="px-2">{email}</div>
          </div>
          <div className="d-flex" style={{ lineHeight: 2 }}>
            <PhoneOutlined />
            <div className="px-2">{phone}</div>
          </div>
          <div className="d-flex" style={{ lineHeight: 2 }}>
            <GlobalOutlined />
            <div className="px-2">{website}</div>
          </div>
        </div>
        <div>
          <div
            className="d-flex card col-12 "
            style={{ background: "whitesmoke", height: 50 }}
          >
            <div
              className="col-12 d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
            >
              <div
                onClick={() => {
                  callHeart(idx, !heart);
                }}
              >
                {heart ? <HeartFilled /> : <HeartOutlined />}
              </div>
              <div
                onClick={() => {
                  editModal(true);
                }}
              >
                <EditOutlined />
              </div>
              <div
                onClick={() => {
                  call(idx);
                }}
              >
                <DeleteOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={ediT}
        onHide={() => {
          editModal(false);
        }}
        centered
      >
        <div className="p-4">
          <h3 className="fw-bold p-0">Edit User</h3>
          <div className="p-3 d-flex">
            <form>
              <input
                className="form-control form-control-lg mt-3"
                type="text"
                placeholder="name"
                defaultValue={name}
                onChange={(e) => {
                  setNm(e.target.value);
                }}
              ></input>
              <input
                className="form-control form-control-lg mt-3"
                type="text"
                placeholder="phone"
                defaultValue={phone}
                onChange={(e) => {
                  setPhn(e.target.value);
                }}
              ></input>
              <input
                className="form-control form-control-lg mt-3"
                type="text"
                placeholder="email"
                defaultValue={email}
                onChange={(e) => {
                  setEm(e.target.value);
                }}
              ></input>
              <input
                className="form-control form-control-lg mt-3"
                type="text"
                placeholder="website"
                defaultValue={website}
                onChange={(e) => {
                  setWeb(e.target.value);
                }}
              ></input>
              <div className="mt-3 d-flex justify-content-end">
                <Button
                  className="mx-2 btn btn-secondary"
                  onClick={() => {
                    editModal(false);
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={submitReq}>Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
