<?php
$counterFile = 'counter.txt';

// Read current count
$count = file_exists($counterFile) ? (int)file_get_contents($counterFile) : 0;

// Increment count
$count++;

// Save new count
file_put_contents($counterFile, $count);

// Output count
echo $count;
?>
