#!/bin/sh
## Update files on FTP server

pwd
ls
ls build
cd deploy

envsubst < lftp.template > lftp

lftp -f lftp

rm lftp
exit