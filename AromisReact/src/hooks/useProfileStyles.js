import { useEffect } from "react";

const styles = `
  .profile-header-custom {
    background: linear-gradient(135deg, #2fafc3, #8e6cdf) !important;
    color: white !important;
    padding: 2rem 0;
    margin-bottom: 2rem;
    border-radius: 0 0 20px 20px;
  }

  .profile-img-custom {
    width: 150px !important;
    height: 150px !important;
    border: 5px solid white !important;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1) !important;
    object-fit: cover !important;
  }

  .stats-card-custom {
    background: white !important;
    border-radius: 15px !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05) !important;
    border: none !important;
  }

  .activity-item-custom {
    border-left: 3px solid #2fafc3 !important;
    padding-left: 15px !important;
    margin-bottom: 20px !important;
  }

  body {
    background-color: #f5f7fb !important;
  }
`;

export const useProfileStyles = () => {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);
};
