export default function GoogleMap() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=48.8583,2.2923&zoom=15&key=YOUR_API_KEY"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Eiffel Tower Map Location"
      ></iframe>
    </div>
  );
}
