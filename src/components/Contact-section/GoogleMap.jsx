const GoogleMap = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58265.11671813966!2d82.65743034423417!3d24.116619925848997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398f30495517f2bd%3A0x3b90fd685599d38!2sShakti%20Nagar%2C%20Uttar%20Pradesh%20231222!5e0!3m2!1sen!2sin!4v1691494886758!5m2!1sen!2sin"
            width="100%"
            height="500"

            style={{ border: 0, marginBottom:"50px"}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
};

export default GoogleMap;
