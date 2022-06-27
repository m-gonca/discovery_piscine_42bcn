#!/bin/sh

if [ $# -eq 0 ]; then
	echo No arguments supplied
fi
for i in ${1} ${2} ${3}; do 
  	echo $i 
done
