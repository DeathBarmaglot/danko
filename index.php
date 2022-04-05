<?php

  $url=$_GET['url'];

  if(!@is_array(getimagesize($url))){
    echo "path/to/placeholderImage.png";
    exit("wrong file type.");
  }

  $img = file_get_contents($url);

  $fn = substr(strrchr($url, "/"), 1);
  file_put_contents($fn,$img);
  echo $fn;

?>