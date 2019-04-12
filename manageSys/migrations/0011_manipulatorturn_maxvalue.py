# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manageSys', '0010_auto_20170514_1415'),
    ]

    operations = [
        migrations.AddField(
            model_name='manipulatorturn',
            name='maxvalue',
            field=models.IntegerField(default=365),
        ),
    ]
