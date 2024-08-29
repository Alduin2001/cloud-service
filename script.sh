#!/bin/bash

push_github(){
    git add .
    git status
    git commit -m "$1"
    git push origin main
}
push_github "$1"
