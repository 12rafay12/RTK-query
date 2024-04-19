import React from "react";
import "./List.css";
import { Button, Form, Input } from "antd";
import { useParams } from "react-router-dom";
import { useEditCardMutation } from "../../Redux/Slices/CardSlice";
import { useGetCardQuery } from "../../Redux/Slices/CardSlice";
import { useState } from "react";
const New = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const { id } = useParams();
  const { data } = useGetCardQuery(id);

  return (
    <div className="cardsContainer">
      <Form>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter name!",
            },
          ]}
          initialValue={data ? data.name : ""}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default New;
