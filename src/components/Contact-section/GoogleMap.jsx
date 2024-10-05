const GoogleMap = () => {
    return (
      <div style={{
        width: "70%",
        height: "400px",
        overflow: "hidden",
        margin: "40px auto",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          border: "1px solid #333",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
          transform: "scale(1.05)"
        }
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb!:1m18!1m12!1m3!1d58265.11671813966!2d82.65743034423417!3d24.116619925848997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398f30495517f2bd%3A0x3b90fd685599d38!2sShakti%20Nagar%2C%20Uttar%20Pradesh%20231222!5e0!3m2!1sen!2sin!4v1691494886758!5m2!1sen!2sin"
          frameBorder="0"
          style={{
            width: "100%",
            height: "100%",
            transition: "all 0.3s ease-in-out"
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  };
  export default GoogleMap;

