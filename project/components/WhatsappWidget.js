import { useEffect } from "react";

const WhatsAppWidget = () => {
  useEffect(() => {
    const url = "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?64420";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = url;

    // Widget options
    const options = {
      enabled: true,
      chatButtonSetting: {
        backgroundColor: "#00e785",
        ctaText: "Chat with us",
        borderRadius: "25",
        marginLeft: "0",
        marginRight: "20",
        marginBottom: "20",
        ctaIconWATI: false,
        position: "right",
      },
      brandSetting: {
        brandName: "Performance Growth Academy",
        brandSubTitle: "undefined",
        brandImg: "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
        welcomeText: "Hi there!\nHow can I help you?",
        messageText: "Hello, %0A I have a question about {{page_link}}",
        backgroundColor: "#00e785",
        ctaText: "Chat with us",
        borderRadius: "25",
        autoShow: false,
        phoneNumber: "918921866687",
      },
    };

    script.onload = () => {
      if (typeof CreateWhatsappChatWidget !== "undefined") {
        CreateWhatsappChatWidget(options);
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup the script if the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component only injects the script, no UI
};

export default WhatsAppWidget;
