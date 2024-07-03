const StatusWidget = () => {
  return (
    <div className="flex justify-center">
      <iframe
        src="https://status.mocdt.com/embed-status/0e59092f/dark-md"
        width={230}
        height={61}
        frameBorder={0}
        scrolling="no"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default StatusWidget;
