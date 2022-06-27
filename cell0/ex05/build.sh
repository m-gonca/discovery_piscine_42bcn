#!/bin/sh

if [ $# -eq 0 ]; then
	echo No arguments supplied 
fi
for i; do 
   mkdir ex$i 
done
