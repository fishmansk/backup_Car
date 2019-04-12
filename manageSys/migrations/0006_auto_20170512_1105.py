# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manageSys', '0005_windowshow'),
    ]

    operations = [
        migrations.RenameField(
            model_name='manipulatorturn',
            old_name='title',
            new_name='Knee_Name',
        ),
        migrations.RenameField(
            model_name='windowshow',
            old_name='value',
            new_name='Show_window',
        ),
        migrations.RenameField(
            model_name='windowshow',
            old_name='title',
            new_name='Window_name',
        ),
    ]
