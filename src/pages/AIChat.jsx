import MainLayout from "../layouts/MainLayout";

import ChatHeader from "../components/chat/ChatHeader";
import SuggestedQuestions from "../components/chat/SuggestedQuestions";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";

function AIChat() {
  return (
    <MainLayout>

      <ChatHeader />

      <div className="mt-6">
        <SuggestedQuestions />
      </div>

      <div className="mt-6">
        <ChatMessages />
      </div>

      <div className="mt-6">
        <ChatInput />
      </div>

    </MainLayout>
  );
}

export default AIChat;