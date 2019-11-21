<!DOCTYPE html>
<html>
<body>

<p id="demo">JavaScript.</p>

<button type="button" onclick='printCars()'>Click Me!</button>

<script type="text/javascript">
  function printCars(){
    const cars = ["Saab", "Volvo", "BMW"];
    cars.forEach(function(car){
      console.log(car)
    });
}
</script>
</body>
</html>
