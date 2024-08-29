#!/bin/bash

push_github(){
    git add .
    git status
    git commit -m "$1"
}
push_github "$1"
