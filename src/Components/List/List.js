import React from "react";
import { useGetCardsQuery } from "../../Redux/Slices/CardSlice";
import { Button, Card, Col, Image, Row } from "antd";
import { useDeleteCardMutation } from "../../Redux/Slices/CardSlice";
import "./List.css";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";
const List = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetCardsQuery();
  const [
    deleteCardMutation,
    { isLoading: delCardLoading, isError, isSuccess, error: delCardsError },
  ] = useDeleteCardMutation();
  console.log("This is the data:", data);
  const handleEdit = (id) => {
    navigate(`/NewForm/${id}`);
  };

  const handleDelete = async (id) => {
    console.log("Deleting card with ID:", id);
    try {
      await deleteCardMutation(id);
    } catch (error) {
      console.log("Error while deleting", error);
    }
  };
  return (
    <>
      <div className="spinContainer">
        {(isLoading || delCardLoading) && <Spin size="large" />}
      </div>
      {!delCardLoading && (
        <div className="cardsContainer">
          <Row gutter={[16, 16]}>
            {data &&
              data.map((value) => (
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Card
                    title={value.name}
                    bordered={false}
                    style={{
                      width: 300,
                    }}
                    actions={[
                      <Button key="edit" onClick={() => handleEdit(value.id)}>
                        Edit
                      </Button>,
                      <Button
                        key="delete"
                        onClick={() => handleDelete(value.id)}
                      >
                        Delete
                      </Button>,
                    ]}
                  >
                    <p>ID: {value.id}</p>
                    <Image width={200} src={value.avatar} />
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default List;
