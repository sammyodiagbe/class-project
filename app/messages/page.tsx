/* eslint-disable */
"use client";

import { useState } from "react";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

const dummyMessages: Message[] = [
  {
    id: 1,
    sender: "HR Department",
    content: "Your application for Senior Developer position has been received",
    timestamp: "2024-03-20T10:30:00",
    isRead: false,
  },
  {
    id: 2,
    sender: "John Smith",
    content: "We'd like to schedule an interview for next week",
    timestamp: "2024-03-19T15:45:00",
    isRead: true,
  },
  {
    id: 3,
    sender: "Tech Team",
    content: "Thank you for completing the technical assessment",
    timestamp: "2024-03-18T09:15:00",
    isRead: true,
  },
  {
    id: 4,
    sender: "System Notification",
    content: "Your profile has been successfully updated",
    timestamp: "2024-03-17T16:20:00",
    isRead: true,
  },
  {
    id: 5,
    sender: "Jane Doe",
    content: "Following up on your application to Software Engineer position",
    timestamp: "2024-03-16T11:00:00",
    isRead: false,
  },
];

const MessagesPage = () => {
  const [messages, setMessages] = useState<Message[]>(dummyMessages);

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 rounded-lg border ${
                !message.isRead
                  ? "bg-blue-50 border-blue-200"
                  : "border-gray-200"
              }`}
            >
              <div className="flex justify-between items-start">
                <h2 className="font-semibold">{message.sender}</h2>
                <span className="text-sm text-gray-500">
                  {new Date(message.timestamp).toLocaleDateString()}
                </span>
              </div>
              <p className="mt-2 text-gray-700">{message.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
