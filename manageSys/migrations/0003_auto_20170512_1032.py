# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manageSys', '0002_auto_20170511_1016'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='exampleDB',
            new_name='manipulatorTurn',
        ),
    ]
