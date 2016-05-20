# JenkinsBuildStatusAlert

#### Application info

Application runs server for polling Jenkins for updates on raspberry.

##### Features:

* Two different modes for jenkins status :
    * Building mode - LED toggles if current job is on building state
    * Status mode - Depending on last build status (success/fail) proper LED is firing (green/red)

#### Technical info

##### Implemented:

* Polling for Jenkins server
* UI application for setting up Jenkins job to watch for
* Signals for raspberry to make proper action

Don`t hesitate to review our demo:
[Demo video](https://www.dropbox.com/s/cc57gh343s54ow6/Raspberry%20demo.mov?dl=0)
