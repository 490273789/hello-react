import { RouterProvider } from 'react-router-dom';
import routes from '@/routes';
function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}
// https://maps.googleapis.com/maps/api/geocode/json?latlng=35.71271231787593,139.76196753937813&key=AIzaSyDQXH6kraDqlf55hURHX5d0NU1l8JldiTM&language=ja&result_type=street_address%7Ccountry%7Croute&&location_type=ROOFTOP
export default App;

// https://maps.googleapis.com/maps/api/geocode/json?latlng=35.71271231787593,139.76196753937813&key=AIzaSyDQXH6kraDqlf55hURHX5d0NU1l8JldiTM&language=ja&location_type=ROOFTOP
