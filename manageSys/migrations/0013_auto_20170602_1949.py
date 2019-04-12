# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manageSys', '0012_recogpoint'),
    ]

    operations = [
        migrations.AddField(
            model_name='recogpoint',
            name='flag',
            field=models.BooleanField(default=1),
        ),
        migrations.AlterField(
            model_name='recogpoint',
            name='angle',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='recogpoint',
            name='angleAfter',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='recogpoint',
            name='distance',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='recogpoint',
            name='x',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='recogpoint',
            name='y',
            field=models.FloatField(),
        ),
    ]
