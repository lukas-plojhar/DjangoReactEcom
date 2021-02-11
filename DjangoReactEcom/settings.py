import os
import django_heroku
from pathlib import Path

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECRET_KEY = '7ps579@21idgv())gwgyudl*&64#i*95)92t8n4($fv=gtv_7x'
DEBUG = True

ALLOWED_HOSTS = [
    'identcz.herokuapp.com',
    'identcz-fe.herokuapp.com',
    'localhost',
    '127.0.0.1'
]

CORS_ORIGIN_WHITELIST = [
    'http://127.0.0.1:3000',
    'http://localhost:3000',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        # 'NAME': BASE_DIR / 'db.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
    # 'default': {
    #     'ENGINE': 'django.db.backends
    #     .postgresql_psycopg2',
    #     'HOST': 'ec2-54-220-35-19.eu-west-1.compute.amazonaws.com',
    #     'NAME': 'd56j7rfn4eclsp',
    #     'USER': 'loerjgdrysicqm',
    #     'PORT': '5432',
    #     'PASSWORD': '32fcce2a55cdbe5ea3958b362f0ecf53789490d031eafd6d18e0f10edb9dfe05',
    # }
}

# Mail definition
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.mailgun.org'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'donotreply@kamiltrojnar.pl'
EMAIL_HOST_PASSWORD = 'passwordsecret'

# HEROKU SETTINGS https://help.heroku.com/MAAHJSVZ/how-can-i-setup-mailgun-on-django
# EMAIL_HOST = os.environ.get('MAILGUN_SMTP_SERVER', '')
# EMAIL_PORT = os.environ.get('MAILGUN_SMTP_PORT', '')
# EMAIL_HOST_USER = os.environ.get('MAILGUN_SMTP_LOGIN', '')
# EMAIL_HOST_PASSWORD = os.environ.get('MAILGUN_SMTP_PASSWORD', '')
# EMAIL_USE_TLS = False
# DEFAULT_FROM_EMAIL = 'testing@example.com'

# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # My applications
    # 'products.apps.ProductConfig',
    # 'carts.apps.CartConfig',
    # 'orders.apps.OrderConfig',
    'products',
    'carts',
    'orders',
    'customers',

    # 3rd party applications
    'rest_framework',
    'corsheaders',
    'anymail'
]

ANYMAIL = {
    "MAILGUN_API_KEY": "9e778cb988d3fc4e4431068a8c763d3e-4de08e90-025089fb",
    "MAILGUN_SENDER_DOMAIN": 'sandbox6a54d266c7e84716ad7e70065ade3a42.mailgun.org',  # your Mailgun domain, if needed
    # "MAILGUN_SENDER_DOMAIN": 'https://api.mailgun.net/v3/sandbox6a54d266c7e84716ad7e70065ade3a42.mailgun.org',  # your Mailgun domain, if needed
    # https://anymail.readthedocs.io/en/stable/installation/#anymail-settings-reference
    # https://github.com/anymail/django-anymail
}

EMAIL_BACKEND = "anymail.backends.mailgun.EmailBackend"  # or sendgrid.EmailBackend, or...
DEFAULT_FROM_EMAIL = "you@example.com"  # if you don't already have this in settings
SERVER_EMAIL = "your-server@example.com"  # ditto (default from-email for Django errors)

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # new
    'django.middleware.common.CommonMiddleware',  # new
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'DjangoReactEcom.urls'

# SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
# SECURE_SSL_REDIRECT = True

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'DjangoReactEcom.wsgi.application'

# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Media files
# https://www.geeksforgeeks.org/python-uploading-images-in-django/
MEDIA_ROOT = os.path.join(BASE_DIR, 'images')
MEDIA_URL = '/images/'

# REST framework
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ]
}

django_heroku.settings(locals())
