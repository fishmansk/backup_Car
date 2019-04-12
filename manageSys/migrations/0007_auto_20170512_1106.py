# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manageSys', '0006_auto_20170512_1105'),
    ]

    operations = [
        migrations.RenameField(
            model_name='manipulatorturn',
            old_name='Knee_Name',
            new_name='title',
        ),
        migrations.RenameField(
            model_name='windowshow',
            old_name='Window_name',
            new_name='title',
        ),
        migrations.RenameField(
            model_name='windowshow',
            old_name='Show_window',
            new_name='value',
        ),
    ]
