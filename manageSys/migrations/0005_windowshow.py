# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manageSys', '0004_auto_20170512_1045'),
    ]

    operations = [
        migrations.CreateModel(
            name='windowShow',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=150)),
                ('value', models.BooleanField(default=1)),
            ],
        ),
    ]
