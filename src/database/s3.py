import boto3
from settings import AWS_ID, AWS_SECRET

def s3_connection(self):
    s3 = boto3.client('s3',
                      aws_access_key_id=AWS_ID,
                      aws_secret_access_key=AWS_SECRET)
    return s3