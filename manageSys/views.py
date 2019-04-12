from django.shortcuts import render
from django.http import HttpResponse
from .models import windowShow
from .sendGo import send_motion
from .sendGo import send_stop
from .sendGo import send_autoMot
from .sendGo import send_emerStop
from time import sleep
import os
import picamera
camera = picamera.PiCamera()
camera.resolution = (75, 50)
import io
import numpy

DS_INDEX = 0
def DS_SAVE(cmd):
	try:
		global DS_INDEX
		DS_INDEX += 1
		DIR = '/home/pi/robotPlatform/dataset/'
		camera.capture(DIR+'images/'+str(DS_INDEX)+'.jpg')
		with open(DIR+'cmd/'+str(DS_INDEX)+'.txt', 'w') as f:
			f.write(cmd)
		print('SAVED DATASET')
	except:
		print('NOT SAVED DATASET')
	
	

	
def home(request):
	context = {
		'title': 'PLATFORM: manage',
		'showWin': windowShow.objects.all(),
	}
	return render(request, 'manageSys/home.html', context)
		
def	str2bool(v):
	if v=='false': return False	
	else: return True		
	
def manage_go(request):
	if request.method == 'POST':
		way = request.POST['way']
		if way in ['up', 'down']:
			send_motion(way)
			if way == 'up':
				DS_SAVE('0 1 0 0')
			else:
				DS_SAVE('0 0 0 1')
			

		else:
			print('TURN: ', way)
			send_autoMot(u'Turn', 10)
	return HttpResponse()	
	
def manage_stop(request):
	if request.method == 'POST':
		send_stop(request.POST['stop'])
	return HttpResponse()

def autoMotion(request):
	if request.method == 'POST':
		print(request.POST)
		try:	
			v = int(request.POST['val'][0])
			print("TURN RIGHT")
			DS_SAVE('1 0 0 0')
		except:
			print("TURN LEFT")
			DS_SAVE('0 0 1 0')
		#print(v)
		
		#if v > 0.0:
		#	DS_SAVE('1 0 0 0')
		#else:
		#	DS_SAVE('0 0 1 0')
		send_autoMot(request.POST['what'], request.POST['val'])

		sleep(0.125)
		
		send_emerStop()
	return HttpResponse()
	
def emerStop(request):
	if request.method == 'POST':
		send_emerStop();
	return HttpResponse()

def camera_view(request):
	#camera.capture('camera.jpg', resize=(320, 240))

	
	#with open('camera.jpg', 'rb') as f:
		#image = f.read()
	#image = io.BytesIO()
	#camera.capture(image, 'jpeg', resize=(75,50))
        #s = image.getvalue()
	s = ''
	return HttpResponse(s, content_type='image/jpeg')
