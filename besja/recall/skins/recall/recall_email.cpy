## Controller Python Script "recall_email"
##bind container=container
##bind context=context
##bind namespace=
##bind script=script
##bind state=state
##bind subpath=traverse_subpath
##parameters=
##title=Email feedback message
##

from Products.CMFPlone import PloneMessageFactory as _
request = container.REQUEST
errors = state.getErrors()
mailhost = context.MailHost

portal              = context.portal_url
email_from_address  = portal.email_from_address


mto = email_from_address 

msg="""Имя: %s; Телефон: %s; Страница: %s
    """ %(request.get('name'), request.get('phone'), request.get('referer'))

mailhost.send(messageText=msg, mto=mto, mfrom=email_from_address,  subject="Новый заказ звонка" )

context.plone_utils.addPortalMessage(_(u'Mail sent.'))


return state