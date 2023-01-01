from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


class UserManager(BaseUserManager):
    def create_user(self, email, full_name, terms_and_condition, province, address1, phone_number, house_number, password=None,
                    password2=None):
        """
        Creates and saves a User with the given email, full_name, terms_and_condition and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            full_name=full_name,
            terms_and_condition=terms_and_condition,
            province=province,
            phone_number=phone_number,
            address1=address1
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, full_name, terms_and_condition, province=None, address1='admin', phone_number=None, house_number=None, password=None):
        """
        Creates and saves a superuser with the given email, full_name, terms_and_condition,
        phone_no, province, phone_number, address1, password
        """
        user = self.create_user(
            email,
            full_name=full_name,
            terms_and_condition=terms_and_condition,
            password=password,
            province=province,
            address1=address1,
            phone_number=phone_number,
            house_number=house_number,

        )
        user.is_admin = True
        user.save(using=self._db)
        return user


PROVINCES = (
    ('Province 1', 'Province 1'),
    ('Province 2', 'Province 2'),
    ('Province 3', 'Province 3'),
    ('Province 4', 'Province 4'),
    ('Province 5', 'Province 5'),
    ('Province 6', 'Province 6'),
    ('Province 7', 'Province 7'),
)


class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    full_name = models.CharField(max_length=128, null=False, blank=False)
    terms_and_condition = models.BooleanField(default=False)
    province = models.CharField(choices=PROVINCES, max_length=128)
    address1 = models.CharField(max_length=128, null=False, blank=False)
    phone_number = models.CharField(max_length=10)
    house_number = models.CharField(max_length=128, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name', 'terms_and_condition', 'province', 'address1', 'phone_number', 'house_number']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin
