# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manageSys', '0009_auto_20170514_1413'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='windowshow',
            name='showKnee',
        ),
        migrations.AddField(
            model_name='manipulatorturn',
            name='showKnee',
            field=models.BooleanField(default=1),
        ),
    ]
