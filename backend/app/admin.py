from django.contrib import admin
from app.models import (
    User,
    Attachment1,
    AdminData,
)
# Register your models here.
admin.site.register(User)
admin.site.register(Attachment1)
admin.site.register(AdminData)