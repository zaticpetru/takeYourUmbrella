import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className="container width-90
      flex flex-column min-height-100vh align-items-center
      color-white">
      
      <button
        className="align-self-start padding-none"
        onClick={() => navigate(-1)}
      >
        <img
          className="margin-block-1"
          width="40px"
          height="40px"
          src="/images/back-button.png"
          alt="go back"
        />
      </button>
      <div className="settings-container">
        <div className="flex flex-column gap-05">
          <div className="flex align-items-center gap-4">
            <p className="font-size-m font-weight-7">Settings</p>
          </div>
          <p className="font-size-xs">UNIT</p>
          <div className="flex justify-content-f-between">
            <span> Temperature unit</span>
            <span>℃</span>
          </div>
          <div className="flex justify-content-f-between">
            <span> Wind speed unit</span>
            <span>km/h</span>
          </div>
          <div className="flex justify-content-f-between">
            <span>Atmospheric pressure unit</span>
            <span>mbar</span>
          </div>
          <div
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "white",
              margin: "2rem 0 2rem",
            }}
          ></div>
          <div className="flex flex-column align-items-center justify-content-f-center">
            <p className="margin-none">
              Weather your want to be notified about
            </p>
            <div className="margin-block-1" style={{ width: "80%" }}>
              <div className="flex justify-content-f-between align-items-center">
                <span>Rain</span>
                <span>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </span>
              </div>
              <div className="flex justify-content-f-between align-items-center">
                <span>Heat</span>
                <span>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </span>
              </div>
            </div>
            <p>When would you like to be notified?</p>
            <input className="color-white font-size-l margin-block-1" type="time" id="appt" name="appt"
              min="09:00" max="18:00" required></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
