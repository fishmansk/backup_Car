from django.db import models

class manipulatorTurn(models.Model):
	title = models.CharField(max_length=150)
	value = models.IntegerField(default = 90)
	maxvalue = models.IntegerField(default = 365)
	maxCatch = models.IntegerField(default = 50)
	maxLenCatch = models.IntegerField(default = 300)
	showKnee = models.BooleanField(default = True)
	
	def __unicode__ (self):
		return self.title
	
class windowShow(models.Model):
	title = models.CharField(max_length=150)
	value = models.BooleanField(default = 1)
	
	def __unicode__ (self):
		return self.title	
		
class recogPoint(models.Model):
	angle = models.FloatField()
	distance = models.FloatField()
	angleAfter = models.FloatField()
	x = models.FloatField()
	y = models.FloatField()
	flag = models.BooleanField(default = 1);