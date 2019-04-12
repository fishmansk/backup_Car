# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manageSys', '0008_kneeshow'),
    ]

    operations = [
        migrations.DeleteModel(
            name='kneeShow',
        ),
        migrations.AddField(
            model_name='windowshow',
            name='showKnee',
            field=models.BooleanField(default=1),
        ),
    ]
