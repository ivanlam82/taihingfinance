export default function GoogleMap() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=Boss+Commercial+Centre,Jordan,Kowloon,Hong+Kong&key=AIzaSyA8rDrxBzMRlgbA7BQ2DoY31gEXzZ4Ours"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Boss Commercial Centre Map Location"
      ></iframe>
    </div>
  )
}
