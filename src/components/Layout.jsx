export default function Layout() {
  return (
    <div className="qr-component-main w-[300px] h-[60%] flex flex-col items-center justify-center bg-[var(--white)] p-5 rounded-xl gap-y-3">
      <div className="qr-head">
        <img
          alt="QR"
          className="rounded-xl"
          src={require("../images/image-qr-code.png")}
        ></img>
      </div>
      <div className="qr-body h-[35%] flex flex-col items-center justify-center gap-y-3">
        <h3 className="text-center  text-xl px-1 font-[700]">
          Improve your front-end skills by building projects
        </h3>
        <p className="text-sm font-[400] text-center px-1 text-[var(--grayish-blue)]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to next level!
        </p>
      </div>
    </div>
  );
}
