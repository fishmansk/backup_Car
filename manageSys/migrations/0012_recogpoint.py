# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manageSys', '0011_manipulatorturn_maxvalue'),
    ]

    operations = [
        migrations.CreateModel(
            name='recogPoint',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('angle', models.IntegerField()),
                ('distance', models.IntegerField()),
                ('angleAfter', models.IntegerField()),
                ('x', models.IntegerField()),
                ('y', models.IntegerField()),
            ],
        ),
    ]
