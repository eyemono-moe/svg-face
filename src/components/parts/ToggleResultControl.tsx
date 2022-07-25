import { Component } from "solid-js";
import { useOptionContext } from "../context/OptionContext";
import ControlToggleButton from "./OptionToggleButton";

const ToggleResultControl: Component = () => {
  const resultOnSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-person-video buttonSvg"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.57855 2.0449C1.20538 2.12535 0.859895 2.31168 0.585786 2.58579C0.210714 2.96086 0 3.46957 0 4V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H11.8258L8.40635 10.0107C8.27447 10.0036 8.13905 10 8 10C4.963 10 3.655 11.73 3.202 13H2C1.73478 13 1.48043 12.8946 1.29289 12.7071C1.10536 12.5196 1 12.2652 1 12V4C1 3.73478 1.10536 3.48043 1.29289 3.29289C1.48043 3.10536 1.73478 3 2 3H2.39721L1.57855 2.0449ZM5.50101 6.6211C5.51913 7.25835 5.78018 7.8657 6.23223 8.31775C6.593 8.67852 7.05268 8.91764 7.54753 9.00871L5.50101 6.6211ZM9.66935 8.41098L6.41621 4.61565C6.86098 4.25146 7.4201 4.04999 8 4.04999C8.66304 4.04999 9.29893 4.31338 9.76777 4.78222C10.2366 5.25106 10.5 5.88695 10.5 6.54999C10.5 7.21303 10.2366 7.84891 9.76777 8.31775C9.73573 8.3498 9.7029 8.38088 9.66935 8.41098ZM13.6028 13H14C14.2652 13 14.5196 12.8946 14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H5.03136L4.17422 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V12C16 12.5304 15.7893 13.0391 15.4142 13.4142C15.1401 13.6883 14.7946 13.8746 14.4214 13.9551L13.6028 13Z"
        fill="black"
      />
      <path
        d="M2.37963 0.674604C2.19992 0.464941 1.88427 0.440661 1.6746 0.620372C1.46494 0.800083 1.44066 1.11573 1.62037 1.3254L2.37963 0.674604ZM13.6204 15.3254C13.8001 15.5351 14.1157 15.5593 14.3254 15.3796C14.5351 15.1999 14.5593 14.8843 14.3796 14.6746L13.6204 15.3254ZM1.62037 1.3254L13.6204 15.3254L14.3796 14.6746L2.37963 0.674604L1.62037 1.3254Z"
        fill="black"
      />
    </svg>
  );

  const resultOffSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-person-video buttonSvg"
      viewBox="0 0 16 16"
    >
      <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z" />
    </svg>
  );

  const [_, setState] = useOptionContext();

  return (
    <ControlToggleButton
      activeContent={resultOnSvg}
      inactiveContent={resultOffSvg}
      onActivate={() => {
        setState("showDetectResult", true);
      }}
      onDeactivate={() => {
        setState("showDetectResult", false);
      }}
    />
  );
};

export default ToggleResultControl;
