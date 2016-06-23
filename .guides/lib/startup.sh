#!/bin/bash

# start on container startup checks the database existance 
# and prepopulate database

SAMPLE_DATA_DIR=/home/codio/workspace/.guides/sample-data
PEOPLE_DATA=${SAMPLE_DATA_DIR}/people.sql
PEOPLE_DATABASE="people"

if ! [ `mysqlshow ${PEOPLE_DATABASE} 2> /dev/null` ]; then
  mysql < ${PEOPLE_DATA}
fi
