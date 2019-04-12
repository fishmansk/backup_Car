# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manageSys', '0003_auto_20170512_1032'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='manipulatorturn',
            name='description',
        ),
        migrations.AddField(
            model_name='manipulatorturn',
            name='value',
            field=models.IntegerField(default=90),
        ),
    ]
